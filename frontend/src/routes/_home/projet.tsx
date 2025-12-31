import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/projet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/projet"!</div>
}
