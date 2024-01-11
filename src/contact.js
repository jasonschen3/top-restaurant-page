const createContact = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create and append image element
  const contact = document.createElement("div");
  contact.textContent = "720";
  pageContent.append(contact);

  content.append(pageContent);
};

export default createContact;
