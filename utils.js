/**
 * [formatField is used to format JSON (camelCased) fields to human formatted fields, e.g. firstName --> First Name]
 * @param  {String} field [JSON formatted field name]
 * @return {String}       [Human formatted field name]
 */
//TODO: find a way to make this agnostic to length. will just work on ANY field
// currently: only of the form fieldForm or just field
function formatField(field) {
  let regex = /^([a-z]+)([A-Z][a-z]+)?$/;

  const groups = field.match(regex);

  console.log(groups);

  // groups[0] is the overall match
  // groups[1, 2] are the capture groups
  if (groups[2] === undefined) {
    return uppercaseString(groups[1]);
  } else {
    return uppercaseString(groups[1]) + " " + uppercaseString(groups[2]);
  }
}

function uppercaseString(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * [formatSlug given]
 * @param  {[string]} title [human-readable title]
 * @return {[string]}      [slug-formatted string]
 */
function formatSlug(title) {
  slug = title.toLowerCase();

  slug = slug.replace(" ", "-");

  console.debug("Formatted Link:", slug);

  return slug;
}

module.exports = { formatField, formatSlug };
