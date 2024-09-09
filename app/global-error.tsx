'use client'
import Button from "@/components/Button"
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
      <div className='flex w-96 pt-10 justify-end gap-9 text-center items-center flex-col mx-auto'>
      <h2>Something went wrong globally! {error.message}</h2>
      <Button
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
      </body>
    </html>
  )
}