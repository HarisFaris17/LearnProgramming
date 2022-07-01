

public enum AkunPermission {
    AKUN_READ("akun:read"),
    AKUN_WRITE("akun:write"),
    PARKIR_READ("parkir:read"),
    PARKIR_WRITE("parkir:write"),
    ADMIN_READ("admin:read"),
    ADMIN_WRITE("admin:write");

    private final String permission;

    private AkunPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }


}
