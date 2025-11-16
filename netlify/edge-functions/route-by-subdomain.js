export default async (request, context) => {
  const host = request.headers.get("host") || "";
  const [sub] = host.split(".");

  // Example: handle kano.sprnt.one
  if (sub === "kano") {
    // redirect to some path in the same site
    return Response.redirect("https://sprnt.one/kano", 302);
  }

  // Example: handle numbered subdomain like 25.sprnt.one
  if (!["sprnt", "www"].includes(sub)) {
    // maybe rewrite to /tenant/:sub
    const url = new URL(request.url);
    url.pathname = `/tenant/${sub}${url.pathname}`;
    return context.rewrite(url.toString());
  }

  // default: let site behave normally
  return context.next();
};

export const config = {
  path: "/*", // run this edge function on all routes
};
