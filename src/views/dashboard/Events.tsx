import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import React from 'react'

export default function Events() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-200 mb-6">Events</h1>
      <Card className=" min-w-80 bg-slate-800 text-slate-200 s shadow-lg">
        <CardHeader className=" border-b-2 border-slate-400">
          <CardTitle className="text-md font-semibold">Choose Event</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 p-2">
            <label htmlFor="event" className="text-md font-semibold text-slate-200">Select the event</label>
            <Select>
              <SelectTrigger id="event" className="w-full bg-slate-700 border-slate-600">
                <SelectValue placeholder="ESE" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 text-slate-200 border-slate-600">
                <SelectItem value="ese">ESE</SelectItem>
                <SelectItem value="eer">EER</SelectItem>
                <SelectItem value="sse">SSE</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-2 space-y-1">
            {['ESE', 'EER', 'EER', 'EER', 'EER', 'EER', 'SSE'].map((item, index) => (
              <div key={index} className="bg-slate-700 p-2 rounded text-sm">
                {item}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Go →
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
