import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/user"!</div>
}
