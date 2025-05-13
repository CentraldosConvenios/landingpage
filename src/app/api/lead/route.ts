import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { nome, contato, vidas, idades, possuiCNPJ, cep } = body

    const lead = await prisma.lead.create({
      data: {
        nome,
        contato,
        vidas,
        idades,
        possuiCNPJ,
        cep
      }
    })

    return NextResponse.json({ success: true, lead }, { status: 201 })
  } catch (error) {
    console.error('Erro ao salvar lead:', error)
    return NextResponse.json({ success: false, error: 'Erro ao salvar lead' }, { status: 500 })
  }
}
