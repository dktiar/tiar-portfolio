// GROQ queries for fetching data from Sanity

export const profileQuery = `*[_type == "profile"][0]{
  name, title, company, location, email, phone, tagline, education,
  bioId, bioEn, profileImage, cvFile, linkedin, github
}`;

export const experiencesQuery = `*[_type == "experience"] | order(order asc){
  _id, company, title, location, startDate, endDate, isCurrent,
  descriptionId, descriptionEn, achievements, stack, order
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc){
  _id, title, category, descriptionId, descriptionEn,
  technologies, impact, status, image, order
}`;

export const certificationsQuery = `*[_type == "certification"] | order(order asc){
  _id, name, issuer, score, date, badge, order
}`;

export const skillsQuery = `*[_type == "skill"] | order(order asc){
  _id, category, categoryLabel, items, order
}`;

export const statsQuery = `*[_type == "stat"] | order(order asc){
  _id, label, value, context, order
}`;

export const galleryQuery = `*[_type == "gallery"] | order(order asc){
  _id, image, alt, captionId, captionEn, category, order
}`;

export const showcaseQuery = `*[_type == "showcase"] | order(order asc){
  _id, image, alt, captionId, captionEn, order
}`;
