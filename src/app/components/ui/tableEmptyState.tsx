interface TableEmptyStateProps {
  colSpan: number;
  message: string;
}

export function TableEmptyState({ colSpan, message }: TableEmptyStateProps) {
  return (
    <tr>
      <td 
        colSpan={colSpan} 
        className="p-20 text-center text-gray-500 italic bg-gray-50 border-b border-gray-100"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          {/* Optional: Add a simple search icon or emoji */}
          <span className="text-2xl">🔎</span>
          <p className="font-medium">{message}</p>
        </div>
      </td>
    </tr>
  );
}