export type DEZMATERIA = '10_MATERIAS';

export type UMAMATERIA = '1_MATERIA';

export interface ICaderno {
  id: number;
  codigo: number;
  valor: number;
  type: DEZMATERIA | UMAMATERIA;
}
