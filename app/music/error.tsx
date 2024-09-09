'use client'
 
import Button from '@/components/Button'
import Error  from '@/components/Error'
import { useEffect } from 'react'
 
export default function ErrorClothes({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <Error message={error.message}>
      <Button
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </Error>
  )
}