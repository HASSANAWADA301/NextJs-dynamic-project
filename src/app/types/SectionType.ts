// types/SectionType.ts

export interface SectionType {
  id: string;
  type: string;
  translations: {
    [lang: string]: Record<string, any>;
  };
}
