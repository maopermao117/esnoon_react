'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data: loginData, error } = await supabase.auth.signInWithPassword(data)

  console.log("ログイン結果:", loginData)
  console.error("エラー:", error)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  console.log("ログイン完了です")
  redirect('/')
}
