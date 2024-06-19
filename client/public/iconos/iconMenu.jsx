import React from 'react'

export default function IconMenu({className, color}) {
  return (
    <svg fill={color} width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z" fillRule="evenodd"/>
</svg>
  )
}
