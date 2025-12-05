"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast, Toaster } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactPopup() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        product: "",
        projectDetails: "",
    });
    const [loading, setLoading] = useState(false);

    // 🔥 Auto popup after 5 minutes
    //   useEffect(() => {
    //     const timer = setTimeout(() => {
    //       if (!sessionStorage.getItem("popupClosed")) setOpen(true);
    //     }, 120000);  //- //2 nute // 5 minutes  30000 - 30 sec

    // // 30 sec	30000
    // // 2 min	120000
    // // 5 min	300000

    //     return () => clearTimeout(timer);
    //   }, []);



    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 50000); // 2 minutes

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setOpen(false); // DO NOT save to sessionStorage
    };






    //   const closePopup = () => {
    //     setOpen(false);
    //     sessionStorage.setItem("popupClosed", "true");
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("https://am-backend-2968.onrender.com/api/leads", form, {
                headers: { "Content-Type": "application/json" },
            });

            toast.success("Thank you! We received your request.");
            setForm({ fullName: "", phone: "", email: "", product: "", projectDetails: "" });
            closePopup();
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <>
            <Toaster position="top-right" richColors closeButton />

            {/* Background Blur */}
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                onClick={closePopup}>

                {/* Popup Card */}
                <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative animate-slide-up"
                    onClick={(e) => e.stopPropagation()}>

                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
                    >
                        ×
                    </button>

                    <h2 className="text-2xl font-bold mb-2 text-sky-900 text-center">Contact / Get a Quote</h2>
                    <p className="text-gray-600 mb-5 text-center">Share your requirements and we’ll contact you shortly.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Full Name */}
                        <div className="relative">
                            <Label>Full Name</Label>
                            <Input
                                type="text"
                                placeholder="John Doe"
                                required
                                value={form.fullName}
                                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                className="pl-10"
                            />
                            <span className="absolute left-3 top-5 text-gray-400">👤</span>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <Label>Phone</Label>
                            <Input
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
                            <Label>Email (optional)</Label>
                            <Input
                                type="email"
                                placeholder="example@mail.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="pl-10"
                            />
                            <span className="absolute left-3 top-5 text-gray-400">✉️</span>
                        </div>

                        {/* Product */}
                        <div>
                            <Label>Select Product</Label>
                            <Select
                                value={form.product}
                                onValueChange={(val) => setForm({ ...form, product: val })}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choose a product" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Portable Office Cabin">Portable Office Cabin</SelectItem>
                                    <SelectItem value="Security Guard Cabin">Security Guard Cabin</SelectItem>
                                    <SelectItem value="Portable Cafe">Portable Cafe</SelectItem>
                                    <SelectItem value="Portable Toilet">Portable Toilet</SelectItem>
                                    <SelectItem value="Prefab House">Prefab House</SelectItem>
                                    <SelectItem value="Accommodation">Prefab Accommodation</SelectItem>
                                    <SelectItem value="Labor Colony">Labor Colony</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Project Details */}
                        <div>
                            <Label>Project Details (optional)</Label>
                            <textarea
                                rows="3"
                                placeholder="Provide any specific requirements"
                                className="border rounded-md p-3 w-full"
                                value={form.projectDetails}
                                onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
