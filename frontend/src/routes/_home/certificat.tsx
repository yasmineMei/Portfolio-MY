import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/certificat')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/certificat"!</div>
}
