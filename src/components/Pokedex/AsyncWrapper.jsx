import ErrorBoundary from './ErrorBoundary.jsx'
import React, { Suspense } from 'react'

const AsyncWrapper = ({ errorFallback, children }) => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <ErrorBoundary fallback={errorFallback}>{children}</ErrorBoundary>
    </Suspense>
  )
}

export default AsyncWrapper
