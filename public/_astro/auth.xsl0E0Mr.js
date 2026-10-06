import { s as o } from "./client.C3G48Cdd.js";
function a(r) {
  return r
    ? typeof r == "string"
      ? r
      : r instanceof Error ||
          (typeof r == "object" &&
            "message" in r &&
            typeof r.message == "string")
        ? r.message
        : "Unexpected error"
    : "Unknown error";
}
async function i() {
  try {
    const { data: r, error: t } = await o.auth.getSession();
    if (t) throw t;
    return { data: r, error: null };
  } catch (r) {
    return { data: null, error: a(r) };
  }
}
async function u(r) {
  try {
    const { data: t, error: e } = await o.auth.signInWithOtp({
      email: r,
      options: { shouldCreateUser: !0, emailRedirectTo: window?.location.href },
    });
    if (e) throw e;
    return { data: t, error: null };
  } catch (t) {
    return { data: null, error: a(t) };
  }
}
async function c(r, t = "/myco/boards", e = "magiclink") {
  try {
    const { error: n } = await o.auth.verifyOtp({
      token_hash: r,
      type: "magiclink",
      options: { redirectTo: t },
    });
    if (n) throw n;
    return { error: null };
  } catch (n) {
    return { data: null, error: a(n) };
  }
}
async function h() {
  try {
    const { error: r } = await o.auth.signOut();
    if (r) throw r;
    return { error: null };
  } catch (r) {
    return { error: a(r) };
  }
}
function f(r) {
  try {
    const {
      data: { subscription: t },
    } = o.auth.onAuthStateChange((e, n) => {
      r(e, n);
    });
    return () => t.unsubscribe();
  } catch {
    return () => {};
  }
}
export { h as a, i as g, f as o, u as s, c as v };
