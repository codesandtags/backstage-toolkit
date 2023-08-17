import {
   ApiEntity,
   ComponentEntity,
   DomainEntity,
   GroupEntity,
   SystemEntity,
} from '@backstage/catalog-model'

export interface CentralizedCatalog {
   groups: GroupEntity[]
   apis: ApiEntity[]
   components: ComponentEntity[]
   domains: DomainEntity[]
   systems: SystemEntity[]
}
