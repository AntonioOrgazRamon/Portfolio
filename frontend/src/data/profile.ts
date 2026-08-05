/**
 * Datos personales y enlaces de contacto.
 * Actualiza email, github, linkedin y cvUrl antes de enviar el portfolio a empresas.
 */
export const PROFILE = {
  name: 'Antonio Orgaz Ramón',
  email: 'panchutet@gmail.com',
  github: '',
  linkedin: '',
  cvUrl: '/cv/Antonio-Orgaz-Ramon-CV.pdf',
  cvDownloadName: 'Antonio-Orgaz-Ramon-CV.pdf',
  portfolioUrl: 'https://portfolio.nakedcode.es',
} as const;

export function hasContactLink(value: string | undefined | null): value is string {
  if (!value || !value.trim()) return false;
  if (/TU_USUARIO|TU_PERFIL/i.test(value)) return false;
  return true;
}
