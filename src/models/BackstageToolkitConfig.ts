export interface BackstageToolkitConfig {
   output: string
   generator: {
      groups: number
      components: number
      apis: number
      domains: number
      systems: number
      relations: boolean
   }
   approach: string // 'centralized' | 'decentralized'
}
