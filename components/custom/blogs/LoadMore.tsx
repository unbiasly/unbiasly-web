import React from 'react'

type LoadProps = {
    onLoadMore: () => void;
}

const LoadMore = ({ onLoadMore }: LoadProps) => {
  return (
    <div className="flex justify-center pt-4">
                <button
                    aria-label="Load More"
                    onClick={onLoadMore}
                    className="w-12 h-12 rounded-full bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
  )
}

export default LoadMore