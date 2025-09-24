import { SECTION_REGISTRY } from "./SectionRegistry";
import type { PageSection } from "../../constant/LandingPageData";

interface Props {
  sectionsFromApi?: unknown;
}

function normalizeSections(payload: any): PageSection[] {
  if (!payload) return [];
  if (Array.isArray(payload.pageSections)) return payload.pageSections;
  return [];
}

export default function SectionRenderer({ sectionsFromApi }: Props) {
  const sections = normalizeSections(sectionsFromApi)
    .filter((s) => s?.isVisible !== false)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  return (
    <>
      {sections.map((section) => {
        const Comp = SECTION_REGISTRY[section.type];
        if (!Comp) {
          return null;
        }
        return (
          <section key={section.id ?? JSON.stringify(section)} id={section.id}>
            <Comp {...section} />
          </section>
        );
      })}
    </>
  );
}
