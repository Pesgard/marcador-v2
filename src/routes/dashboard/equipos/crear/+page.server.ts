import { fail } from '@sveltejs/kit';
import { supabase } from '../../../../lib/supabaseClient';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const nombre = formData.get('nombre') as string;
      const organizacion = formData.get('organizacion') as string;

      // Validación de datos
      if (!nombre || !organizacion) {
        return fail(400, { error: 'Nombre y organización son obligatorios.' });
      }

      // Inserta el equipo en la tabla "Equipos"
      const { data: equipo, error: equipoError } = await supabase
        .from('Equipos')
        .insert([{ nombre, organizacion }])
        .select('id, nombre')
        .single();

      if (equipoError) {
        return fail(500, { error: `Error al crear el equipo: ${equipoError.message}` });
      }

      // Devuelve los datos del equipo creado
      return { success: true, equipo };
    } catch (err) {
      console.error('Error inesperado:', err);
      return fail(500, { error: 'Ocurrió un error inesperado al crear el equipo.' });
    }
  }
};
