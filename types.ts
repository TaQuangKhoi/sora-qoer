export class TaskItem {
    ordering_key: number
    payload: Payload

    constructor(data: any) {
        this.ordering_key = data.ordering_key
        this.payload = new Payload(data.payload)
    }
}

export class Payload {
    id: string
    user: string
    created_at: string
    status: string
    progress_pct: number | null
    progress_pos_in_queue: number | null
    estimated_queue_wait_time: number | null
    queue_status_message: string | null
    priority: number
    type: string
    prompt: string
    n_variants: number
    n_frames: number
    height: number
    width: number
    model: string | null
    operation: string
    inpaint_items: any[]
    preset_id: string | null
    caption: string | null
    actions: any | null
    interpolation: any | null
    sdedit: any | null
    remix_config: any | null
    quality: string | null
    generations: Generation[]
    num_unsafe_generations: number
    title: string
    moderation_result: ModerationResult
    failure_reason: string | null
    needs_user_review: boolean

    constructor(data: any) {
        Object.assign(this, data)
        this.generations = (data.generations || []).map((g: any) => new Generation(g))
        this.moderation_result = new ModerationResult(data.moderation_result)
    }
}

export class Generation {
    id: string
    task_id: string
    created_at: string
    deleted_at: string | null
    url: string
    seed: number
    can_download: boolean
    download_status: string
    is_favorite: boolean | null
    is_liked: boolean | null
    is_public: boolean
    is_archived: boolean
    is_featured: boolean | null
    has_feedback: boolean | null
    like_count: number
    cloudflare_metadata: any
    cf_thumbnail_url: string | null
    encodings: Encodings
    width: number
    height: number
    n_frames: number
    prompt: string
    title: string
    actions: any | null
    inpaint_items: any | null
    interpolation: any | null
    sdedit: any | null
    operation: string
    model: string | null
    preset_id: string | null
    user: User
    moderation_result: ModerationResult
    paragen_status: any
    task_type: string
    remix_config: any
    quality: string

    constructor(data: any) {
        Object.assign(this, data)
        this.encodings = new Encodings(data.encodings)
        this.user = new User(data.user)
        this.moderation_result = new ModerationResult(data.moderation_result)
    }
}

export class Encodings {
    source: EncodingDetails
    md: EncodingDetails | null
    ld: EncodingDetails | null
    thumbnail: EncodingDetails | null
    spritesheet: EncodingDetails | null

    constructor(data: any) {
        this.source = new EncodingDetails(data.source)
        this.md = data.md ? new EncodingDetails(data.md) : null
        this.ld = data.ld ? new EncodingDetails(data.ld) : null
        this.thumbnail = data.thumbnail ? new EncodingDetails(data.thumbnail) : null
        this.spritesheet = data.spritesheet ? new EncodingDetails(data.spritesheet) : null
    }
}

export class EncodingDetails {
    path: string
    size?: number | null
    width?: number | null
    height?: number | null
    duration_secs?: number | null
    ssim?: number | null

    constructor(data: any) {
        Object.assign(this, data)
    }
}

export class User {
    id: string
    username: string

    constructor(data: any) {
        Object.assign(this, data)
    }
}

export class ModerationResult {
    type: string
    results_by_frame_index: Record<string, any>
    code: string | null
    is_output_rejection: boolean
    task_id: string

    constructor(data: any) {
        Object.assign(this, data)
    }
}
