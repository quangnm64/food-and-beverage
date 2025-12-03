import type Metadata  from "next";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/components/Layout/Navbar";
import Box from "@mui/material/Box";
import { AuthProvider } from "@/context/AuthContext";
import { OrderProvider } from "@/context/OrderContext";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FANDB - Premium F&B Experience",
  description: "Experience the best culinary delights at FANDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AuthProvider>
            <OrderProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1 }}>
                  {children}
                </Box>
                <Footer />
              </Box>
            </OrderProvider>
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
