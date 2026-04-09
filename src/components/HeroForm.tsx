"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Invalid email address'),
  location: z.string().min(1, 'Please select a location'),
});

type FormData = z.infer<typeof formSchema>;

export default function HeroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Brochure sent successfully!");
  };

  return (
    <div className="bg-white rounded-md p-6 sm:p-8 w-full shadow-lg">
      <div className="flex justify-center mb-6">
        <h3 className="text-[#102b4e] text-lg font-bold uppercase tracking-wide border-b-[3px] border-[#102b4e] pb-1 inline-block">
          DOWNLOAD BROCHURE
        </h3>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[13px] font-bold text-black mb-1.5">Name</label>
          <input
            id="name"
            placeholder="Enter your name"
            {...register('name')}
            className={`w-full px-3 py-2 border text-black bg-white focus:outline-none focus:border-red-600 transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-[13px] font-bold text-black mb-1.5">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register('phone')}
            className={`w-full px-3 py-2 border text-black bg-white focus:outline-none focus:border-red-600 transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-[13px] font-bold text-black mb-1.5">Email Id</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email id"
            {...register('email')}
            className={`w-full px-3 py-2 border text-black bg-white focus:outline-none focus:border-red-600 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-[13px] font-bold text-black mb-1.5">Location</label>
          <select
            id="location"
            {...register('location')}
            className={`w-full px-3 py-2 border text-black bg-white focus:outline-none focus:border-red-600 transition-colors ${errors.location ? 'border-red-500' : 'border-gray-200'}`}
          >
            <option value="">Select</option>
            <option value="Dwarka">Dwarka</option>
            <option value="Noida">Noida</option>
            <option value="Kalkaji">Kalkaji</option>
            <option value="Preet Vihar">Preet Vihar</option>
            <option value="Pitampura">Pitampura</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Rajouri Garden">Rajouri Garden</option>
            <option value="South Extension">South Extension</option>
            <option value="Gurgaon">Gurgaon</option>
          </select>
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#cb1116] hover:bg-[#a60b0e] text-white text-[15px] p-2.5 mt-2 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Download Brochure'}
        </button>
      </form>
    </div>
  );
}
