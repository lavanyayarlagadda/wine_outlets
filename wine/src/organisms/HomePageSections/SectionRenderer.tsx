import { SECTION_REGISTRY } from "./SectionRegistry";
import { useTheme } from "@mui/material/styles";
import type { PageSection } from "../../constant/LandingPageData";
import { styled } from "@mui/material/styles";

interface Props {
  sectionsFromApi?: unknown;
  alternateBackground?: boolean;
  alternateColor?: string;
}

const StyledSection = styled("section", {
  shouldForwardProp: (prop) => prop !== "applyBg" && prop !== "bg",
})<{ applyBg?: boolean; bg?: string }>(({ theme, applyBg, bg }) => {
  const backgroundColor = applyBg ? (bg ?? theme.palette.primary.light) : undefined;

  return {
    backgroundColor,
    boxSizing: "border-box",
  };
});

function normalizeSections(payload: any): PageSection[] {
  if (!payload) return [];
  if (Array.isArray(payload.pageSections)) return payload.pageSections;
  return [];
}

export default function SectionRenderer({
  sectionsFromApi,
  alternateBackground = true,
  alternateColor,
}: Props) {
  const theme = useTheme();
  const sections = normalizeSections(sectionsFromApi)
    .filter((s) => s?.isVisible !== false)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  const bgColor = alternateColor ?? theme.palette.primary.light ?? undefined;
  return (
    <>
      {sections.map((section, i) => {
        const Comp = SECTION_REGISTRY[section.type];
        if (!Comp) {
          return null;
        }
        const shouldApply = alternateBackground && i % 2 === 0 && !!bgColor;
        return (
          <StyledSection
            key={section.id ?? JSON.stringify(section)}
            id={section.id}
            applyBg={shouldApply}
            bg={alternateColor}
          >
            <Comp {...section} />
          </StyledSection>
        );
      })}
    </>
  );
}
