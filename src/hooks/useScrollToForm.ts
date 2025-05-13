'use client'

import { useCallback } from 'react'

export default function useScrollToForm() {
  return useCallback(() => {
    const form = document.getElementById('formulario')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
}
