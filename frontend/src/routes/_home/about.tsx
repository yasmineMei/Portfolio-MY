import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/about"!</div>
}
