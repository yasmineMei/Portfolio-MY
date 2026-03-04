import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useData } from "../../contexts/DataContext";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Textarea } from "../../components/ui/textarea";
import {
  Eye,
  Trash2,
  Reply,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { Message } from "../../types";

export const Route = createFileRoute("/_admin/messages")({
  component: RouteComponent,
});

function RouteComponent() {
  const { messages, updateMessage, deleteMessage } = useData();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "status">("date");

  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Tri des messages avec protection localeCompare
  const sortedMessages = useMemo(() => {
    return [...messages].sort((a, b) => {
      if (sortBy === "date") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      // Protection contre undefined ou valeurs imprévues
      const statusA = a.status || "";
      const statusB = b.status || "";
      return statusA.localeCompare(statusB);
    });
  }, [messages, sortBy]);

  // Logique de pagination
  const totalPages = Math.ceil(sortedMessages.length / itemsPerPage);
  const paginatedMessages = sortedMessages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message);
    const id = message._id; // Priorité à _id (MongoDB)
    if (message.status === "non-lu" && id) {
      updateMessage(id, { status: "lu" });
    }
  };

  const handleReply = (message: Message) => {
    setSelectedMessage(message);
    setIsReplyOpen(true);
    setReplyContent(
      `Bonjour ${message.name},\n\n\n---\nEn réponse à votre message : "${message.subject}"`,
    );
  };

  const handleSendReply = async () => {
    if (!selectedMessage) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:5000/api/messages/${selectedMessage._id}/reply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: selectedMessage.email,
            subject: selectedMessage.subject,
            replyContent: replyContent,
          }),
        },
      );

      if (res.ok) {
        toast.success("Réponse envoyée au client !");
        setIsReplyOpen(false);
        setReplyContent("");
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Impossible de contacter le serveur");
    }
  };

  const handleDelete = (message: Message) => {
    const id = message._id;
    if (id && confirm("Êtes-vous sûr de vouloir supprimer ce message ?")) {
      deleteMessage(id);
      toast.success("Message supprimé");
      setSelectedMessage(null);
    }
  };

  // Correction : Utilisation systématique de _id
  const handleMarkAsRead = (message: Message) => {
    if (message._id) {
      updateMessage(message._id, { status: "lu" });
      toast.success("Message marqué comme lu");
      // Mettre à jour l'état local pour le dialogue ouvert
      setSelectedMessage((prev) => (prev ? { ...prev, status: "lu" } : null));
    }
  };

  const handleMarkAsUnread = (message: Message) => {
    if (message._id) {
      updateMessage(message._id, { status: "non-lu" });
      toast.success("Message marqué comme non lu");
      setSelectedMessage((prev) =>
        prev ? { ...prev, status: "non-lu" } : null,
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Messages
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gérez les demandes de contact
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setSortBy(sortBy === "date" ? "status" : "date")}
        >
          Trier par: {sortBy === "date" ? "Date" : "Statut"}
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Statut</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Sujet</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedMessages.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-12 text-gray-500"
                >
                  Aucun message trouvé
                </TableCell>
              </TableRow>
            ) : (
              paginatedMessages.map((message) => (
                <TableRow
                  key={message._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <TableCell>
                    <Badge
                      variant={
                        message.status === "non-lu" ? "default" : "secondary"
                      }
                    >
                      {message.status === "non-lu" ? "Non lu" : "Lu"}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell className="max-w-50 truncate">
                    {message.subject}
                  </TableCell>
                  <TableCell>
                    {new Date(message.createdAt).toLocaleDateString("fr-FR")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleViewMessage(message)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(message)}
                        className="text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-4 border-t dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} sur {totalPages}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Précédent
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Suivant <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Dialogue de Visualisation */}
      <Dialog
        open={!!selectedMessage && !isReplyOpen}
        onOpenChange={() => setSelectedMessage(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selectedMessage?.subject}
            </DialogTitle>
            <DialogDescription>
              De:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {selectedMessage?.name}
              </span>{" "}
              ({selectedMessage?.email})
              <br />
              Reçu le{" "}
              {selectedMessage &&
                new Date(selectedMessage.createdAt).toLocaleString("fr-FR")}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            {/* Scroll vertical ajouté ici avec max-h */}
            <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border dark:border-gray-700 max-h-50 overflow-y-auto shadow-inner text-sm sm:text-base leading-relaxed">
              <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                {selectedMessage?.message}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <Button
                onClick={() => selectedMessage && handleReply(selectedMessage)}
              >
                <Reply className="h-4 w-4 mr-2" /> Répondre
              </Button>

              {selectedMessage?.status === "non-lu" ? (
                <Button
                  variant="outline"
                  onClick={() =>
                    selectedMessage && handleMarkAsRead(selectedMessage)
                  }
                >
                  <Mail className="h-4 w-4 mr-2" /> Marquer comme lu
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() =>
                    selectedMessage && handleMarkAsUnread(selectedMessage)
                  }
                >
                  <Mail className="h-4 w-4 mr-2" /> Marquer comme non lu
                </Button>
              )}

              <Button
                variant="destructive"
                onClick={() => selectedMessage && handleDelete(selectedMessage)}
              >
                <Trash2 className="h-4 w-4 mr-2" /> Supprimer
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialogue de Réponse */}
      <Dialog open={isReplyOpen} onOpenChange={setIsReplyOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Répondre à {selectedMessage?.name}</DialogTitle>
            <DialogDescription>
              Email: {selectedMessage?.email}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Écrivez votre réponse ici..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              rows={12}
              className="resize-none focus-visible:ring-[#c76140] overflow-y-auto max-h-50"
            />
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsReplyOpen(false)}>
                Annuler
              </Button>
              <Button
                onClick={handleSendReply}
                className="bg-[#c76140] hover:bg-[#b15438]"
              >
                Envoyer la réponse
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
