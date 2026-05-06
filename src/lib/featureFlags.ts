const enabledValues = new Set(['true', 'show', 'enabled', 'on', '1']);

function readFlag(value: string | undefined, fallback = false) {
  if (!value) {
    return fallback;
  }

  return enabledValues.has(value.trim().toLowerCase());
}

export const featureFlags = {
  showComics: readFlag(process.env.PUBLIC_SHOW_COMICS, false),
  showFeaturedBook: readFlag(process.env.PUBLIC_SHOW_FEATURED_BOOK, false),
  showCrewTactics: readFlag(process.env.PUBLIC_SHOW_CREW_TACTICS, false),
  showRoutesContent: readFlag(process.env.PUBLIC_ROUTES_ENABLED, false),
  showEventsContent: readFlag(process.env.PUBLIC_EVENTS_ENABLED, false),
  showFieldNotesContent: readFlag(process.env.PUBLIC_FIELD_NOTES_ENABLED, false),
};

export function getReviewStatusCopy(label: string) {
  return {
    eyebrow: 'Under Review',
    title: `${label} content is coming soon`,
    description:
      `This section has a live route, but its editorial review is not complete yet. We are keeping the page online so links continue to work while the final content is being reviewed.`,
  };
}
