import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/project')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/project"!</div>
}
