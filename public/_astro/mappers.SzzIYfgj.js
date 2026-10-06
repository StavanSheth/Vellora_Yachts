import { s } from "./client.C3G48Cdd.js";
import { i as u, h as m } from "./helpers.TKXE-3NQ.js";
import { m as l } from "./map-search-result.BQ3gJ3oA.js";
async function c() {
  if (!s) throw new Error("Supabase client required");
  const {
    data: { user: e },
    error: t,
  } = await s.auth.getUser();
  if (t) throw t;
  if (!e) throw new Error("No authenticated user");
  return e;
}
async function C({ id: e, title: t, items: r = [] }) {
  const { data: i, error: n } = await s
    .rpc("create_board", { p_board_id: e, p_title: t, p_items: r ?? [] })
    .maybeSingle();
  if (n) throw n;
  if (!i?.boardid) throw new Error("Board insert returned no id");
  return { id: i.boardid, title: i.title, items: i.items || [] };
}
async function B(e) {
  const t = await c(),
    { error: r } = await s
      .from("boards_users")
      .upsert({ board_id: e, user_id: t.id }, { ignoreDuplicates: !0 });
  if (r) throw r;
  return { success: !0 };
}
async function q(e) {
  const t = await c(),
    { error: r } = await s
      .from("boards_users")
      .delete()
      .eq("board_id", e)
      .eq("user_id", t.id);
  if (r) throw r;
  return e;
}
async function E(e, { id: t, name: r, context: i, type: n, source: a }) {
  const o = `${t}::${i}`,
    { error: d } = await s.rpc("add_item_and_link", {
      boardid: e,
      item: {
        id: o,
        item_id: t,
        item_name: r,
        item_context: i,
        item_type: n,
        item_source: a,
      },
    });
  if (d) throw d;
  return o;
}
async function P(e, t) {
  const r = await c(),
    { data: i, error: n } = await s
      .from("boards_users")
      .select("board_id")
      .eq("board_id", e)
      .eq("user_id", r.id)
      .single();
  if (n || !i) throw new Error("User is not a member of this board");
  const { error: a } = await s
    .from("boards_items")
    .delete()
    .eq("board_id", e)
    .eq("item_id", t);
  if (a) throw a;
  return { success: !0 };
}
async function v(e) {
  const { data: t, error: r } = await s
    .from("boards")
    .select(
      `
      id,
      title,
      items:boards_items (
        item:items (
          id,
          item_id,
          item_name,
          item_context,
          item_type,
          item_source
        )
      )`,
    )
    .eq("id", e)
    .order("created_at", { foreignTable: "boards_items", ascending: !1 })
    .single();
  if (r) throw r;
  return t;
}
async function k() {
  const e = await c(),
    { data: t, error: r } = await s
      .from("boards")
      .select(
        `
      id,
      title,
      items:boards_items (
        item:items (
          id,
          item_id,
          item_name,
          item_context,
          item_type,
          item_source
        )
      ),
      boards_users!inner (user_id)
    `,
      )
      .eq("boards_users.user_id", e.id);
  if (r) throw r;
  return t;
}
function f(e) {
  return e !== null;
}
function _(e) {
  return e.type === "yachtPage";
}
function b(e) {
  switch (e) {
    case "yachtPage":
      return "Yacht";
    case "experiencePage":
      return "Experience";
    case "cruiseRegionPage":
      return "Cruise Region";
    case "cruiseAreaPage":
      return "Cruise Area";
    case "destinationPage":
      return "Destination";
    case "itineraryPage":
      return "Itinerary";
    default:
      return "";
  }
}
function h(e, t) {
  switch (!0) {
    case !u(t):
      return [{ title: "Unavailable", context: "all-contexts" }];
    case m(e, t):
      return [{ title: "Has Changed", context: "all-contexts" }];
    case e === "purchase":
      return [{ title: "Purchase", context: "all-contexts" }];
    default:
      return;
  }
}
function A(e, t) {
  return !Array.isArray(e) || !e.length || !t
    ? []
    : e
        .map(({ id: r, context: i }) => {
          const n = t.get(r);
          if (!n) return null;
          const a = l(i, void 0, {
            resultSource: "algolia",
            pageContext: "mixed",
            trackEventName: "View Moodboard Item",
          })(n);
          let o = a.href;
          if (_(a) && a?.settings?.isGated) {
            const d = a.href.includes("?") ? "&" : "?";
            o = `${a.href}${d}ota=1`;
          }
          return {
            ...a,
            context: b(a.type),
            link: { href: o, target: "_blank", text: "View" },
            href: o,
            isDisabled: !u(a),
            badges: h(i, a),
          };
        })
        .filter(f);
}
const p = ({ item: e }) => ({
    id: e.item_id,
    type: e.item_type,
    context: e.item_context,
    name: e.item_name,
    source: e.item_source ?? void 0,
  }),
  w = (e) => ({ id: e.id, title: e.title, items: (e.items ?? []).map(p) });
function D(e) {
  return e.reduce((t, r) => ((t[r.id] = w(r)), t), {});
}
export {
  A as a,
  E as b,
  C as c,
  P as d,
  k as e,
  D as f,
  v as g,
  B as j,
  q as l,
  w as m,
};
