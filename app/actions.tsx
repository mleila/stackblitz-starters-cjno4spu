"use server";

import {createSupabaseServerClient} from '@/lib/supabase/server'
import { getPageId } from '@/lib/grownomic';

type SubmitFormPayloadArgs = {
  payload: Record<string, any>;
};

export async function submitFormPayload({ payload }: SubmitFormPayloadArgs) {
  const supabase = await createSupabaseServerClient();
  const page_id = getPageId();
  const { data, error } = await supabase
    .from('lp_form_submission')
    .insert([{ page_id, payload }]);
  return { data, error };
}