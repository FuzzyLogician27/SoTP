/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/sotp/templates/actor/parts/actor-attacks.html",
    "systems/sotp/templates/actor/parts/actor-features.html",
    "systems/sotp/templates/actor/parts/actor-items.html",
    "systems/sotp/templates/actor/parts/actor-wounds.html",
    "systems/sotp/templates/actor/parts/actor-effects.html",
    "systems/sotp/templates/actor/parts/actor-skills.html",
  ]);
};
