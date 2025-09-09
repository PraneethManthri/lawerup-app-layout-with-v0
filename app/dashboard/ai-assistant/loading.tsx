export default function AIAssistantLoading() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="animate-pulse">
        <div className="h-8 bg-muted rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 bg-muted rounded animate-pulse"></div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="h-96 bg-muted rounded animate-pulse"></div>
        <div className="h-12 bg-muted rounded animate-pulse"></div>
      </div>
    </div>
  )
}
