interface Step {
  id: string
  title: string
  description?: string
  isCompleted?: boolean
  isActive?: boolean
}

interface StepIndicatorProps {
  steps: Step[]
  currentStepId: string
  className?: string
  orientation?: "horizontal" | "vertical"
}

export default function StepIndicator({ 
  steps, 
  currentStepId,
  className = "",
  orientation = "horizontal" 
}: StepIndicatorProps) {
  const currentIndex = steps.findIndex(step => step.id === currentStepId)

  return (
    <div className={`${orientation === "horizontal" ? "flex items-center justify-between" : "flex flex-col space-y-4"} ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex
        const isActive = step.id === currentStepId
        const isLast = index === steps.length - 1

        return (
          <div 
            key={step.id}
            className={`flex items-center ${orientation === "horizontal" ? "flex-1" : ""}`}
          >
            {/* Step Circle */}
            <div className="flex items-center">
              <div 
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${isCompleted 
                    ? "bg-green-500 text-white" 
                    : isActive 
                      ? "bg-[#002d4b] text-white"
                      : "bg-gray-200 text-gray-500"
                  }
                `}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              
              {/* Step Content */}
              {orientation === "vertical" && (
                <div className="ml-3">
                  <div className={`text-sm font-medium ${isActive ? "text-[#002d4b]" : "text-gray-500"}`}>
                    {step.title}
                  </div>
                  {step.description && (
                    <div className="text-xs text-gray-400">
                      {step.description}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Connector Line */}
            {!isLast && orientation === "horizontal" && (
              <div 
                className={`
                  flex-1 h-0.5 mx-2
                  ${isCompleted ? "bg-green-500" : "bg-gray-200"}
                `}
              />
            )}

            {!isLast && orientation === "vertical" && (
              <div 
                className={`
                  w-0.5 h-8 ml-4
                  ${isCompleted ? "bg-green-500" : "bg-gray-200"}
                `}
              />
            )}
          </div>
        )
      })}

      {/* Horizontal Labels */}
      {orientation === "horizontal" && (
        <div className="flex justify-between w-full mt-2">
          {steps.map((step, index) => {
            const isActive = step.id === currentStepId
            return (
              <div key={`label-${step.id}`} className="text-center flex-1">
                <div className={`text-xs font-medium ${isActive ? "text-[#002d4b]" : "text-gray-500"}`}>
                  {step.title}
                </div>
                {step.description && (
                  <div className="text-xs text-gray-400">
                    {step.description}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
