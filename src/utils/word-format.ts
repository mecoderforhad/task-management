export function truncateDescription(description: string, wordLimit: number): string {
    if (!description || wordLimit <= 0) {
      return description;
    }
  
    const words = description.trim().split(/\s+/);
  
    return words.length > wordLimit 
      ? `${words.slice(0, wordLimit).join(' ')}...` // Use template literals for concatenation
      : description; // Return truncated description or original
  }
  