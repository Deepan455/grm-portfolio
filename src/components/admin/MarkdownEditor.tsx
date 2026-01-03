'use client';

import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

interface MarkdownEditorProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    id?: string;
    name?: string;
}

export default function MarkdownEditor({ value, onChange, label, id, name }: MarkdownEditorProps) {
    return (
        <div className="prose-editor">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                    {label}
                </label>
            )}
            {/* Hidden input to ensure value is submitted with form */}
            <input type="hidden" name={name} value={value} />
            <SimpleMDE
                id={id}
                value={value}
                onChange={onChange}
                options={{
                    spellChecker: false,
                    placeholder: 'Write your post content here...',
                    status: false,
                }}
            />
        </div>
    );
}
