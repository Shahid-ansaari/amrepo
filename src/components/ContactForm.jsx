// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { FaUser, FaPhone, FaEnvelope, FaClipboardList } from "react-icons/fa";
// import Image from "next/image";

// export default function ContactForm({ productsList = ["Portable Office Cabin", "Security Guard Cabin", "Portable Cafe Cabin", "Prefab House"] }) {
//   const [form, setForm] = useState({ fullName: "", phone: "", email: "", product: "", projectDetails: "" });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(""); setError("");

//     try {
//       await axios.post("http://localhost:4000/api/leads", form, { headers: { "Content-Type": "application/json" } });
//       setSuccess("Thank you! We received your request.");
//       setForm({ fullName: "", phone: "", email: "", product: "", projectDetails: "" });
//     } catch {
//       setError("Something went wrong. Try again.");
//     } finally { setLoading(false); }
//   };

//   return (
//     <div className="max-w-4xl  my-10 mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-6">

//       {/* Optional Illustration */}
//       <div className="hidden md:flex items-center  flex-col justify-center">
//         <Image width={1000} height={1000} src="/assets/hero/b.jpg" alt="Contact illustration" className="w-full h-auto object-cover" />
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nulla accusamus itaque quo veritatis tempore illum. Ut maxime expedita hic ab. Veritatis quia quisquam voluptatem repellat error. Vel, ipsa repellendus.</p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <h2 className="text-3xl font-bold text-sky-900 mb-6">Contact / Get a Quote</h2>

//         {/* Input with floating label */}
//         <div className="relative">
//           <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Full Name"
//             required
//             className="peer w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
//             value={form.fullName}
//             onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//           />
//           <label className="absolute left-10 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
//             Full Name
//           </label>
//         </div>

//         <div className="relative">
//           <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="tel"
//             placeholder="Phone"
//             required
//             className="peer w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           />
//           <label className="absolute left-10 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
//             Phone
//           </label>
//         </div>

//         <div className="relative">
//           <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="email"
//             placeholder="Email (optional)"
//             className="peer w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//           <label className="absolute left-10 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
//             Email (optional)
//           </label>
//         </div>

//         <div className="relative">
//           <FaClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <select
//             required
//             className="peer w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
//             value={form.product}
//             onChange={(e) => setForm({ ...form, product: e.target.value })}
//           >
//             <option value="">Select Product</option>
//             {productsList.map((p,i)=>(<option key={i} value={p}>{p}</option>))}
//           </select>
//           <label className="absolute left-10 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
//             Product
//           </label>
//         </div>

//         <textarea
//           placeholder="Project Details (optional)"
//           rows={4}
//           className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
//           value={form.projectDetails}
//           onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-gradient-to-r from-sky-600 to-sky-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition transform"
//         >
//           {loading ? "Sending..." : "Submit"}
//         </button>

//         {success && <p className="text-green-600 font-medium text-center">{success}</p>}
//         {error && <p className="text-red-600 font-medium text-center">{error}</p>}
//       </form>
//     </div>
//   );
// }



// "use client";
// import { useState } from "react";
// import axios from "axios";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     product: "",
//     projectDetails: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError("");

//     try {
//       await axios.post("http://localhost:4000/api/leads", form, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setSuccess("Thank you! We received your request.");
//       setForm({
//         fullName: "",
//         phone: "",
//         email: "",
//         product: "",
//         projectDetails: "",
//       });
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto py-10">
//       <h2 className="text-3xl font-bold mb-6 text-center">Contact / Get a Quote</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           className="border p-3 w-full"
//           value={form.fullName}
//           onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//         />

//         <input
//           type="tel"
//           placeholder="Phone"
//           required
//           className="border p-3 w-full"
//           value={form.phone}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//         />

//         <input
//           type="email"
//           placeholder="Email (optional)"
//           className="border p-3 w-full"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         <select
//           required
//           className="border p-3 w-full"
//           value={form.product}
//           onChange={(e) => setForm({ ...form, product: e.target.value })}
//         >
//           <option value="">Select Product</option>
//           <option value="Portable Office Cabin">Portable Office Cabin</option>
//           <option value="Security Guard Cabin">Security Guard Cabin</option>
//           <option value="Portable Cafe Cabin">Portable Cafe Cabin</option>
//           <option value="Prefab House">Prefab House</option>
//         </select>

//         <textarea
//           placeholder="Project Details (optional)"
//           rows="4"
//           className="border p-3 w-full"
//           value={form.projectDetails}
//           onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white font-medium px-5 py-3 rounded w-full"
//         >
//           {loading ? "Sending..." : "Submit"}
//         </button>

//         {success && <p className="text-green-600">{success}</p>}
//         {error && <p className="text-red-600">{error}</p>}
//       </form>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Toast, ToastProvider, ToastTitle, ToastDescription } from "@/components/ui/sonner";
// import { toast, Toaster } from "sonner";

// import { Loader2 } from "lucide-react";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     product: "",
//     projectDetails: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState({ type: "", message: "", visible: false });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setToast({ type: "", message: "", visible: false });

//     try {
//       await axios.post("http://localhost:4000/api/leads", form, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setToast({ type: "success", message: "Thank you! We received your request.", visible: true });
//       setForm({ fullName: "", phone: "", email: "", product: "", projectDetails: "" });
//     } catch (err) {
//       console.error(err);
//       setToast({ type: "error", message: "Something went wrong. Try again.", visible: true });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-sky-50 min-h-screen flex items-center justify-center p-4">
//       <Toaster position="top-right">
//         <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl max-w-5xl w-full overflow-hidden">

//           {/* Left side illustration */}
//           <div className="hidden md:block md:w-1/2 relative">
//             <img
//               src="/assets/contact-illustration.jpg"
//               alt="Contact Illustration"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Right side form */}
//           <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
//             <h2 className="text-3xl font-bold mb-6 text-sky-900">Contact / Get a Quote</h2>
//             <p className="text-gray-600 mb-6">Share your requirements and we’ll respond with options and pricing.</p>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               {/* Full Name */}
//               <div className="relative">
//                 <Label htmlFor="fullName">Full Name</Label>
//                 <Input
//                   id="fullName"
//                   type="text"
//                   placeholder="John Doe"
//                   required
//                   value={form.fullName}
//                   onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//                   className="pl-10"
//                 />
//                 <span className="absolute left-3 top-10 text-gray-400">👤</span>
//               </div>

//               {/* Phone */}
//               <div className="relative">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="+91 99999 99999"
//                   required
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   className="pl-10"
//                 />
//                 <span className="absolute left-3 top-10 text-gray-400">📞</span>
//               </div>

//               {/* Email */}
//               <div className="relative">
//                 <Label htmlFor="email">Email (optional)</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="example@mail.com"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="pl-10"
//                 />
//                 <span className="absolute left-3 top-10 text-gray-400">✉️</span>
//               </div>

//               {/* Product Select */}
//               <div>
//                 <Label htmlFor="product">Select Product</Label>
//                 <Select
//                   value={form.product}
//                   onValueChange={(val) => setForm({ ...form, product: val })}
//                 >
//                   <SelectTrigger id="product" className="w-full">
//                     <SelectValue placeholder="Choose a product" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Portable Office Cabin">Portable Office Cabin</SelectItem>
//                     <SelectItem value="Security Guard Cabin">Security Guard Cabin</SelectItem>
//                     <SelectItem value="Portable Cafe Cabin">Portable Cafe Cabin</SelectItem>
//                     <SelectItem value="Prefab House">Prefab House</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Project Details */}
//               <div>
//                 <Label htmlFor="projectDetails">Project Details (optional)</Label>
//                 <textarea
//                   id="projectDetails"
//                   rows="4"
//                   placeholder="Provide any specific requirements"
//                   className="border rounded-md p-3 w-full focus:ring-2 focus:ring-sky-400 transition"
//                   value={form.projectDetails}
//                   onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
//                 />
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white flex items-center justify-center gap-2"
//               >
//                 {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
//               </Button>
//             </form>
//           </div>
//         </div>

//         {/* Toast Messages */}
//         {toast.visible && (
//           <Toast className={`fixed bottom-4 right-4 ${toast.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
//             <ToastTitle>{toast.type === "success" ? "Success" : "Error"}</ToastTitle>
//             <ToastDescription>{toast.message}</ToastDescription>
//           </Toast>
//         )}
//       </Toaster>
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast, Toaster } from "sonner";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import ContactButtons from "@/components/ContactButtons";
import ConnectWithUs from "@/components/ConnectWithUs";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    product: "",
    projectDetails: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success("Thank you! We received your request.");
      setForm({ fullName: "", phone: "", email: "", product: "", projectDetails: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-sky-100 min-h-screen flex items-center justify-center p-4">
        {/* Sonner Toaster */}
        <Toaster position="top-right" richColors closeButton />

        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl max-w-5xl w-full overflow-hidden">

          {/* Left Illustration */}
          <div className="hidden md:block md:w-1/2 relative">
            <Image
              width={1000}
              height={1000}
              src="/assets/hero/a.jpg"
              alt="Contact Illustration"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <Image
              width={1000}
              height={1000}
              src="/logo.png"
              alt="Contact Illustration"
              className="object-cover  w-40  m-auto py-" />
            <h2 className="text-2xl font-bold mb-3 text-sky-900">Contact / Get a Quote</h2>
            <p className="text-gray-600 mb-6">Share your requirements and we’ll respond with options and pricing.</p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div className="relative">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="your name"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="pl-10"
                />
                <span className="absolute left-3 top-5 text-gray-400">👤</span>
              </div>

              {/* Phone */}
              <div className="relative">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 99999 99999"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="pl-10"
                />
                <span className="absolute left-3 top-5 text-gray-400">📞</span>
              </div>

              {/* Email */}
              <div className="relative">
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="pl-10"
                />
                <span className="absolute left-3 top-5 text-gray-400">✉️</span>
              </div>

              {/* Product Select */}
              <div>
                <Label htmlFor="product">Select Product</Label>
                <Select
                  value={form.product}
                  onValueChange={(val) => setForm({ ...form, product: val })}
                >
                  <SelectTrigger id="product" className="w-full">
                    <SelectValue placeholder="Choose a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Portable Office Cabin">Portable Office Cabin</SelectItem>
                    <SelectItem value="Security Guard Cabin">Security Guard Cabin</SelectItem>
                    <SelectItem value="Portable Cafe ">Portable Cafe </SelectItem>
                    <SelectItem value="Portable Toilet ">Portable Toilet </SelectItem>
                    <SelectItem value="Prefab House">Prefab House</SelectItem>
                    <SelectItem value="Accomondation">Prefab Accomondation</SelectItem>
                    <SelectItem value="Labor Colony">Labor Colony </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Details */}
              <div>
                <Label htmlFor="projectDetails">Project Details (optional)</Label>
                <textarea
                  id="projectDetails"
                  rows="4"
                  placeholder="Provide any specific requirements"
                  className="border rounded-md p-3 w-full focus:ring-2 focus:ring-sky-400 transition"
                  value={form.projectDetails}
                  onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
