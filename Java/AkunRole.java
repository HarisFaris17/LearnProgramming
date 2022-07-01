import java.util.Set;

import com.google.common.collect.Sets;
import static AkunPermission.*;

public enum AkunRole {
    USER(Sets.newHashSet()),
    ADMIN(Sets.newHashSet(AKUN_READ,AKUN_WRITE,PARKIR_READ,PARKIR_WRITE)),
    OWNER(Sets.newHashSet(AKUN_READ,AKUN_WRITE,PARKIR_READ,PARKIR_WRITE,ADMIN_READ,ADMIN_WRITE));

    private final Set<AkunPermission> akunPermissions;

    private AkunRole(Set<AkunPermission> akunPermissions) {
        this.akunPermissions = akunPermissions;
    }
    
    public Set<AkunPermission> getAkunPermissions() {
        return akunPermissions;
    }
}