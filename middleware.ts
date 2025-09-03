import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Rotas públicas (não exigem autenticação)
const isPublicRoute = createRouteMatcher([
  "/",
  "/automacoes(.*)",
  "/planos(.*)",
  "/token(.*)",
  "/login(.*)",
  "/signup(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/contato(.*)",
  "/api/create-checkout",
  "/api/webhook(.*)",
  "/api/test-env",
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
      // Redireciona para a página de login com URL de retorno
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(signInUrl);
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
