export function Sanitize(str: String): String {
  const map: Record<string, string> = {
      '<': '',
      '>': '',
      '"': '',
      "'": '',
      "`": '',
      "?": '',
  };
  const reg = /[&<>"'/`?]/ig;
  return str.replace(reg, (match)=>(map[match]));
}

