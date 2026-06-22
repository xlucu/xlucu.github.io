interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-16 h-16 border-4',
    lg: 'w-24 h-24 border-4'
  }

  return (
    <div className={`flex items-center justify-center py-20 ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-primary/30 border-t-primary rounded-full animate-spin`}
        role="status"
        aria-label="جاري التحميل"
      >
        <span className="sr-only">جاري التحميل...</span>
      </div>
    </div>
  )
}
