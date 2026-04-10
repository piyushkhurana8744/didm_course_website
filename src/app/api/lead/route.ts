import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Map internal fields to target API fields if necessary
    const params = new URLSearchParams({
      name: data.name || '',
      email: data.email || '',
      mobileno: data.phone || data.mobileno || '',
      course: data.course || "Digital Marketing Master Course",
      enquirysource: data.enquirysource || "Website",
      interestlevel: data.interestlevel || "High",
      country: data.country || "India",
      state: data.location || data.state || '',
      city: data.city || '',
      remark: data.remark || '',
      address: data.address || '',
      counsellor: data.counsellor || ''
    });

    const apiUrl = `http://admin.didm.in/api/lead/custom/0001?${params.toString()}`;
    
    // Forward the request to the external API from the server
    // This bypasses CORS and Mixed Content issues
    const response = await axios.get(apiUrl);
    
    return NextResponse.json({ 
      success: true, 
      data: response.data 
    });
  } catch (error: any) {
    console.error('API Proxy Error:', error.message);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
