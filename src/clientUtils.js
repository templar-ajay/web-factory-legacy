export function getLinkOfAlternatePage(pathname, alternate_uid) {
  console.log("pathname", pathname);
  console.log("alternate_uid", alternate_uid);
  let alternateUID = alternate_uid == "homepage" ? "" : alternate_uid;
  let alternatePathName = "";
  if (pathname.includes("/en")) {
    alternatePathName += "";
  } else {
    alternatePathName += "/en";
  }
  if (pathname.includes("/blog")) {
    alternatePathName += "/blog";
  }
  alternatePathName += "/" + (alternateUID ? alternateUID : "");
  alternatePathName.replaceAll("//", "/");
  alternatePathName.replaceAll("//", "/");
  alternatePathName.replaceAll("//", "/");
  return alternatePathName;
}

export function getReadTime(content) {
  const text = content?.map((o) => o?.text).join(" ") || "";
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}

function getLanguageCode(x) {
  return x?.split("-")[1].toUpperCase();
}

export function getCountries(...arr) {
  return arr
    .filter((x) => x)
    .map((x) => getLanguageCode(x))
    .filter((x) => x);
}
