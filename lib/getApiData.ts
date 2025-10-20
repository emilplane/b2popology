export interface ApiData<T = unknown> {
    success: boolean;
    data: T | null;
    error?: string;
}

export async function getPopologyTowerInfo<T = unknown>(internal_name: string) {
    return await getApiData<T>(`http://localhost:3000/api/popology/tower_info/${internal_name}`);
}

export async function getPopologyTowerStats<T = unknown>(internal_name: string) {
    return await getApiData<T>(`http://localhost:3000/api/popology/tower_stats/${internal_name}?path1=0&path2=0&path3=0`);
}

export async function getApiData<T = unknown>(
    url: string
): Promise<ApiData<T>> {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            return {
                success: false,
                data: null,
                error: `Request failed with status ${res.status}`
            };
        }

        const json = (await res.json()) as T;

        return {
            success: true,
            data: json
        };
    } catch (err) {
        return {
            success: false,
            data: null,
            error: err instanceof Error ? err.message : "Unknown error"
        };
    }
}

export function getBlankApiData() {
    return {
        success: false,
        data: null,
        error: "Blank API Data"
    };
}