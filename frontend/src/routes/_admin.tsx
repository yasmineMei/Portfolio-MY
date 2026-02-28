import { DashboardLayout } from '@/components/dashboardLayout';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DashboardLayout>
      {/* L'Outlet affichera dashboard.tsx, messages.tsx, etc. */}
      <Outlet />
    </DashboardLayout>
  );
}
