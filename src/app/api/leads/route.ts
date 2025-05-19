import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, numPeople, ages, hasCNPJ, cep } = body;

    // Validação básica (pode ser melhorada depois)
    if (!name || !phone || !numPeople || !ages || hasCNPJ === undefined || !cep) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    // Inserção no banco
    const newLead = await prisma.lead.create({
      data: {
        name,
        phone,
        numPeople: Number(numPeople),
        ages,
        hasCNPJ: hasCNPJ === 'Sim' || hasCNPJ === true,
        cep,
      },
    });

    return NextResponse.json({ message: 'Lead criado com sucesso!', lead: newLead }, { status: 201 });

  } catch (error) {
    console.error('Erro ao criar lead:', error);
    return NextResponse.json({ error: 'Erro ao criar lead.' }, { status: 500 });
  }
}
