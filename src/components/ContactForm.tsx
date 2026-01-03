'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/actions/contact';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? 'Sending...' : 'Send Message'}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useActionState(submitContactForm, null);

    return (
        <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">First Name</label>
                    <input name="firstName" type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Jane" />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Last Name</label>
                    <input name="lastName" type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Doe" />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Email Address</label>
                <input name="email" type="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="jane@example.com" />
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Subject</label>
                <select name="subject" id="subject" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-600 dark:text-zinc-400">
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="SEO Audit">SEO Audit</option>
                    <option value="Content Strategy">Content Strategy</option>
                    <option value="Collaboration">Collaboration</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">Message</label>
                <textarea name="message" id="message" rows={5} required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
            </div>

            {state?.error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
                    {state.error}
                </div>
            )}

            {state?.success && (
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm">
                    {state.success}
                </div>
            )}

            <SubmitButton />
        </form>
    );
}
