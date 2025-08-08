import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Rotas públicas (não exigem autenticação)
const isPublicRoute = createRouteMatcher([
  "/",
  "/automacoes(.*)",
  "/planos(.*)",
  "/token(.*)",
  "/login(.*)",
  "/signup(.*)",
  "/contato(.*)",
]);

// Rotas protegidas (explicitamente exigem autenticação)
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
]);

export default clerkMiddleware((auth, req) => {
  // Permite rotas públicas
  if (isPublicRoute(req)) return;

  // Exige login nas rotas protegidas
  if (isProtectedRoute(req)) {
    const { userId } = auth();
    if (!userId) {
      return auth().redirectToSignIn({ returnBackUrl: req.url });
    }
  }
});

// Matcher recomendado pelo Clerk para Next.js (App Router)
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
